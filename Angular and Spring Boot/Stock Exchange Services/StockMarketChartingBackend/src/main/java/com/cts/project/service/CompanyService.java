package com.cts.project.service;

import java.util.List;

import com.cts.project.dto.CompanyDTO;

public interface CompanyService {

	public List<CompanyDTO> getAllCompanies();

	public CompanyDTO getCompanyById(int id);

	public CompanyDTO saveCompany(CompanyDTO company);

	public void deleteCompany(int id);

	public CompanyDTO updateCompany(CompanyDTO company);

}
