package com.cts.project.stockExchangeservice;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "StockExchange")
public class StockExchange implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3320776319131569062L;
	@Id
	@GeneratedValue
	private Integer id;
	private String stockExchangeName;
	private String breif;
	private String address;
	private String remarks;

	public StockExchange() {

	}

	public StockExchange(Integer id, String stockExchangeName, String breif, String address, String remarks) {
		super();
		this.id = id;
		this.stockExchangeName = stockExchangeName;
		this.breif = breif;
		this.address = address;
		this.remarks = remarks;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStockExchangeName() {
		return stockExchangeName;
	}

	public void setStockExchangeName(String stockExchangeName) {
		this.stockExchangeName = stockExchangeName;
	}

	public String getBreif() {
		return breif;
	}

	public void setBreif(String breif) {
		this.breif = breif;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", stockExchangeName=" + stockExchangeName + ", breif=" + breif
				+ ", address=" + address + ", remarks=" + remarks + "]";
	}

}
