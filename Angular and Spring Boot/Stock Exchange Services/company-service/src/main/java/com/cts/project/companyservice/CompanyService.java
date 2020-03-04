package com.cts.project.companyservice;

import java.util.List;


public interface CompanyService {

	public List<Company> getAllCompany();

	public Company getCompanyById(int id);

	public Company saveComany(Company company);

	public void deleteCompany( int id);

	public Company updateCompany(Company company);

}
