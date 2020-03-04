package com.cts.project.initialPublicOfferingservice;

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

@CrossOrigin(origins = "*")
@RestController
public class InitialPublicOfferingRestController {

	@Autowired
	InitialPublicOfferingSerivce ipoService;

	@GetMapping("/ipo")
	public List<InitialPublicOffering> getAllIpo() {
		return ipoService.getAllInitialPublicOfferings();
	}

	@GetMapping("/ipo/{id}")
	public InitialPublicOffering getIpoById(@PathVariable int id) {
		InitialPublicOffering ipo = ipoService.getInitialPublicOfferingById(id);
		return ipo;
	}

	@PostMapping("/ipo")
	public InitialPublicOffering saveIpo(@RequestBody InitialPublicOffering ipo) {
		InitialPublicOffering newIpo = ipoService.saveInitialPublicOffering(ipo);
		return newIpo;
	}

	@DeleteMapping("/ipo/{id}")
	public void deleteIpo(@PathVariable int id) {
		ipoService.deleteInitialPublicOffering(id);
	}

	@PutMapping("/ipo")
	public InitialPublicOffering updateIpo(@RequestBody InitialPublicOffering ipo) {
		InitialPublicOffering updateIpo = ipoService.updateInitialPublicOffering(ipo);
		return updateIpo;
	}

}
