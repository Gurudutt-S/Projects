package com.cts.project.bean;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class IPODetailEntry implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 2607872896199675221L;
	
	@Id
	private int id;
	private String companyName;
	private String stockExchange;
	private String priceperShare;
	private String totalNoOfShares;
	private String opendateTime;
	private String remarks;
	
	public IPODetailEntry() {
		
	}

	public IPODetailEntry(int id, String companyName, String stockExchange, String priceperShare,
			String totalNoOfShares, String opendateTime, String remarks) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.stockExchange = stockExchange;
		this.priceperShare = priceperShare;
		this.totalNoOfShares = totalNoOfShares;
		this.opendateTime = opendateTime;
		this.remarks = remarks;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getPriceperShare() {
		return priceperShare;
	}

	public void setPriceperShare(String priceperShare) {
		this.priceperShare = priceperShare;
	}

	public String getTotalNoOfShares() {
		return totalNoOfShares;
	}

	public void setTotalNoOfShares(String totalNoOfShares) {
		this.totalNoOfShares = totalNoOfShares;
	}

	public String getOpendateTime() {
		return opendateTime;
	}

	public void setOpendateTime(String opendateTime) {
		this.opendateTime = opendateTime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "IPODetailEntry [id=" + id + ", companyName=" + companyName + ", stockExchange=" + stockExchange
				+ ", priceperShare=" + priceperShare + ", totalNoOfShares=" + totalNoOfShares + ", opendateTime="
				+ opendateTime + ", remarks=" + remarks + "]";
	}
	
	
	
}
