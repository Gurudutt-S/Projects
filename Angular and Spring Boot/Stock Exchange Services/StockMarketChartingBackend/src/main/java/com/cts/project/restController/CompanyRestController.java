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

import com.cts.project.bean.Company;
import com.cts.project.repo.CompanyRepo;

@CrossOrigin(origins = "*")
@RestController
public class CompanyRestController {

	@Autowired
	CompanyRepo companyRepo;

	@GetMapping("/company")
	public List<Company> getAllCompany() {
		return companyRepo.findAll();
	}

	@GetMapping("company/{id}")
	public Company getCompanyById(@PathVariable int id) {
		Optional<Company> companylist = companyRepo.findById(id);
		Company company = companylist.get();
		return company;
	}

	@PostMapping("/company")
	public Company saveComany(@RequestBody Company company) {
		Company comp = companyRepo.save(company);
		return comp;
	}

	@DeleteMapping("company/{id}")
	public void deleteCompany(@PathVariable int id) {
		companyRepo.deleteById(id);
	}

	@PutMapping("/company")
	public Company updateCompany(@RequestBody Company company) {
		Company updatecompany = companyRepo.save(company);
		return updatecompany;
	}

}
