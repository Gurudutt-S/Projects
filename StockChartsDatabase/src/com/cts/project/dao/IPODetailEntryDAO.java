package com.cts.project.dao;

import java.util.List;

import com.cts.project.bean.IPODetailEntry;

public interface IPODetailEntryDAO {

	public boolean saveIPODeatail(IPODetailEntry IPODetail);

	public boolean updateIPODetail(IPODetailEntry IPODetail);

	public boolean deleteIPODetail(IPODetailEntry IPODetail);

	public IPODetailEntry getIPODetailById(int id);

	public List<IPODetailEntry> getAllIPODetails();
	
}
