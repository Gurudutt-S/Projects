package com.cts.project.userservice;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class UserRestController {

//	@Autowired
//	UserDAO userDao;
//
//	@Autowired
//	JavaMailSender jms;

	@Autowired
	UserService userService;

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@GetMapping("/login")
	public ResponseEntity<?> login(HttpServletRequest request) {
		String authorization = request.getHeader("Authorization");
		logger.info("Login attempted ---> {}", authorization);
		String username = null;
		String password = null;
		if (authorization != null && authorization.startsWith("Basic")) {
			String base64Credentials = authorization.substring("Basic".length()).trim();
			byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
			String credentials = new String(credDecoded, StandardCharsets.UTF_8);
			username = credentials.split(":")[0];
			password = credentials.split(":")[1];
			logger.info("Uername --> {}",username);
			logger.info("Password --> {}",password);
		}
		try {
			UserDTO user = userService.getUserByUsernnameAndPassword(username, password);
			logger.info("User Logged using username --> {}", username);
			return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getStackTrace());
			logger.info("unauthorized access --> {}", e.getStackTrace().toString());
			return new ResponseEntity<String>("No user found", HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/user")
	public ResponseEntity<?> getUsers() {
		List<UserDTO> list = userService.getAllUsers();
		if (list.size() > 0) {
			return new ResponseEntity<List<UserDTO>>(list, HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("No Users Found", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") int id) {
		try {
			UserDTO user = userService.getUserById(id);
			return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<String>("No Such User Found\n" + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping("/usersignup")
	public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO userDTO) {
		return new ResponseEntity<UserDTO>(userService.saveUser(userDTO), HttpStatus.OK);
	}

	@PutMapping(value = "/activate")
	public ResponseEntity<?> activateUser(@RequestBody String email) {
		System.out.println(email);
		try {
			Boolean status = userService.activateUser(email);
			return new ResponseEntity<Boolean>(status, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<String>("No such e-mail assigned", HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable int id) {
		try {
			userService.deleteUser(id);
			return new ResponseEntity<String>(HttpStatus.NO_CONTENT);
		} catch (IllegalArgumentException e) {
			return new ResponseEntity<String>("No such user found", HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/user")
	public ResponseEntity<?> updateUser(@RequestBody UserDTO userDTO) {
		return new ResponseEntity<UserDTO>(userService.updateUser(userDTO), HttpStatus.OK);
	}

	@GetMapping("/user/username/{username}")
	public ResponseEntity<?> findByUsername(@PathVariable("username") String username) {
		try {
			UserDTO user = userService.getUserByUsername(username);
			return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<String>("No Such User Found\n" + e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

}
