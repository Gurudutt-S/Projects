package com.cts.project.restController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.project.bean.InitialPublicOffering;
import com.cts.project.repo.InitialPublicOfferingRepo;

@CrossOrigin(origins = "*")
@RestController
public class InitialPublicOfferingRestController {

	@Autowired
	InitialPublicOfferingRepo ipoRepo;

	@GetMapping("/ipo")
	public List<InitialPublicOffering> getAllIpo() {
		return ipoRepo.findAll();
	}

	@GetMapping("/ipo/{id}")
	public InitialPublicOffering getIpoById(@PathVariable int id) {
		Optional<InitialPublicOffering> ipoList = ipoRepo.findById(id);
		InitialPublicOffering ipo = ipoList.get();
		return ipo;
	}

	@PostMapping("/ipo")
	public InitialPublicOffering saveIpo(@RequestBody InitialPublicOffering ipo) {
		InitialPublicOffering newIpo = ipoRepo.save(ipo);
		return newIpo;
	}

	@DeleteMapping("/ipo/{id}")
	public void deleteIpo(@PathVariable int id) {
		ipoRepo.deleteById(id);
	}

	@PutMapping("/ipo")
	public InitialPublicOffering updateIpo(@RequestBody InitialPublicOffering ipo) {
		InitialPublicOffering updateIpo = ipoRepo.save(ipo);
		return updateIpo;
	}

}
