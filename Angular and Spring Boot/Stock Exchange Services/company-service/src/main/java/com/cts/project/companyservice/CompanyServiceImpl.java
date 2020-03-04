package com.cts.project.companyservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyServiceImpl implements CompanyService {

	@Autowired
	CompanyRepo companyRepo;

	@Override
	public List<Company> getAllCompany() {
		return companyRepo.findAll();
	}

	@Override
	public Company getCompanyById(int id) {
		Optional<Company> companylist = companyRepo.findById(id);
		Company company = companylist.get();
		return company;
	}

	@Override
	public Company saveComany(Company company) {
		Company comp = companyRepo.save(company);
		return comp;
	}

	@Override
	public void deleteCompany(int id) {
		companyRepo.deleteById(id);

	}

	@Override
	public Company updateCompany(Company company) {
		Company updatecompany = companyRepo.save(company);
		return updatecompany;
	}

}
