package com.cts.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.project.bean.Company;

public interface CompanyDAO extends JpaRepository<Company, Integer> {

}
