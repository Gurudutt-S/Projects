package com.cts.project.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.cts.project.dto.CompanyDTO;
import com.cts.project.repo.CompanyRepo;
import com.cts.project.service.CompanyService;

public class CompanyServiceImpl implements CompanyService {
	
	@Autowired
	CompanyRepo companyRepo;

	@Override
	public List<CompanyDTO> getAllCompanies() {
		
		return null;
	}

	@Override
	public CompanyDTO getCompanyById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public CompanyDTO saveCompany(CompanyDTO company) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteCompany(int id) {
		// TODO Auto-generated method stub

	}

	@Override
	public CompanyDTO updateCompany(CompanyDTO company) {
		// TODO Auto-generated method stub
		return null;
	}

}
