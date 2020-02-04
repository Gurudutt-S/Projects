package com.cts.project.bean;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class StockExchange implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7628442814999031887L;
	@Id
	private int id;
	private String stockExhange;
	private String breif;
	private String contactDetails;
	private String remarks;

	public StockExchange() {

	}

	public StockExchange(int id, String stockExhange, String breif, String contactDetails, String remarks) {
		super();
		this.id = id;
		this.stockExhange = stockExhange;
		this.breif = breif;
		this.contactDetails = contactDetails;
		this.remarks = remarks;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockExhange() {
		return stockExhange;
	}

	public void setStockExhange(String stockExhange) {
		this.stockExhange = stockExhange;
	}

	public String getBreif() {
		return breif;
	}

	public void setBreif(String breif) {
		this.breif = breif;
	}

	public String getContactDetails() {
		return contactDetails;
	}

	public void setContactDetails(String contactDetails) {
		this.contactDetails = contactDetails;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", stockExhange=" + stockExhange + ", breif=" + breif + ", contactDetails="
				+ contactDetails + ", remarks=" + remarks + "]";
	}

}
