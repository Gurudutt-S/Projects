package com.cts.project.companyservice;

import java.util.List;

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
public class CompanyRestController {

//	@Autowired
//	CompanyRepo companyRepo;

	@Autowired
	CompanyService companyService;
	

	@GetMapping("/company")
	public List<Company> getAllCompany() {
		return companyService.getAllCompany();
	}

	@GetMapping("company/{id}")
	public Company getCompanyById(@PathVariable int id) {
		Company company = companyService.getCompanyById(id);
		return company;
	}

	@PostMapping("/company")
	public Company saveComany(@RequestBody Company company) {
		Company comp = companyService.saveComany(company);
		return comp;
	}

	@DeleteMapping("company/{id}")
	public void deleteCompany(@PathVariable int id) {
		companyService.deleteCompany(id);
	}

	@PutMapping("/company")
	public Company updateCompany(@RequestBody Company company) {
		Company updatecompany = companyService.updateCompany(company);
		return updatecompany;
	}

}
