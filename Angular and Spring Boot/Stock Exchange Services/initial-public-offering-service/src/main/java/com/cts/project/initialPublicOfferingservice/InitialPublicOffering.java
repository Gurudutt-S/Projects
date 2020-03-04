package com.cts.project.initialPublicOfferingservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockIpo")
public class InitialPublicOffering implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6975142081715591068L;
	@Id
	@GeneratedValue
	private Integer id;
	private String companyName;
	private String stockExchange;
	private String pricePerShare;
	private String noOfShares;
	private String openDate;
	private String remarks;

	public InitialPublicOffering() {

	}

	public InitialPublicOffering(Integer id, String companyName, String stockExchange, String pricePerShare,
			String noOfShares, String openDate, String remarks) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.stockExchange = stockExchange;
		this.pricePerShare = pricePerShare;
		this.noOfShares = noOfShares;
		this.openDate = openDate;
		this.remarks = remarks;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
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

	public String getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(String pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public String getNoOfShares() {
		return noOfShares;
	}

	public void setNoOfShares(String noOfShares) {
		this.noOfShares = noOfShares;
	}

	public String getOpenDate() {
		return openDate;
	}

	public void setOpenDate(String openDate) {
		this.openDate = openDate;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "InitialPublicOffering [id=" + id + ", companyName=" + companyName + ", stockExchange=" + stockExchange
				+ ", pricePerShare=" + pricePerShare + ", noOfShares=" + noOfShares + ", openDate=" + openDate
				+ ", remarks=" + remarks + "]";
	}

}
