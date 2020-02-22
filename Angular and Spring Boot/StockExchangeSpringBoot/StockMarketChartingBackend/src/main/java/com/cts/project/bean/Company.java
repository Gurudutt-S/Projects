package com.cts.project.bean;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockCompany")
public class Company implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6860813174243429500L;
	@Id
	@GeneratedValue
	private Integer id;
	private String companyName;
	private String ceoName;
	private double turnover;
	private String boardOfDirectors;
	private String sector;
	private String description;
	private String IPOName;
//	private String city;
//	private String state;
//	private long pincode;
//	private String stockExchange;

	public Company() {

	}

	public Company(Integer id, String companyName, String ceoName, double turnover, String boardOfDirectors, String sector,
			String description, String iPOName) {
		super();
		this.id = id;
		this.companyName = companyName;
		this.ceoName = ceoName;
		this.turnover = turnover;
		this.boardOfDirectors = boardOfDirectors;
		this.sector = sector;
		this.description = description;
		IPOName = iPOName;
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

	public String getCeoName() {
		return ceoName;
	}

	public void setCeoName(String ceoName) {
		this.ceoName = ceoName;
	}

	public double getTurnover() {
		return turnover;
	}

	public void setTurnover(double turnover) {
		this.turnover = turnover;
	}

	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}

	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIPOName() {
		return IPOName;
	}

	public void setIPOName(String iPOName) {
		IPOName = iPOName;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", companyName=" + companyName + ", ceoName=" + ceoName + ", turnover=" + turnover
				+ ", boardOfDirectors=" + boardOfDirectors + ", sector=" + sector + ", description=" + description
				+ ", IPOName=" + IPOName + "]";
	}

}
