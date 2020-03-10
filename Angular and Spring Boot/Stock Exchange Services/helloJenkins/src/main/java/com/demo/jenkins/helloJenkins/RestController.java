package com.demo.jenkins.helloJenkins;

import org.springframework.web.bind.annotation.GetMapping;

public class RestController {

	@GetMapping("/hello")
	public String HelloWorld() {
		return "Hello";
	}
	
}
