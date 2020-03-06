package com.cts.project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CtsRestController {

	@GetMapping("/hello")
	public String message() {
		return "Good Afternoon";
	}

}
