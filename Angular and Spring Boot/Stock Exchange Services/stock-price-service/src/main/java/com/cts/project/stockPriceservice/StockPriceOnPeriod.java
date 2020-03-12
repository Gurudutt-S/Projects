package com.cts.project.stockPriceservice;

import java.time.LocalDate;

public class StockPriceOnPeriod {

	private String companyCode;
	private String stockExchange;
	private String dataPoint;
	private double dataValue;

	public StockPriceOnPeriod() {

	}

	public StockPriceOnPeriod(String companyCode, String stockExchange, String dataPoint, double dataValue) {
		super();
		this.companyCode = companyCode;
		this.stockExchange = stockExchange;
		this.dataPoint = dataPoint;
		this.dataValue = dataValue;
	}
	
	public StockPriceOnPeriod(String companyCode, String stockExchange, LocalDate dataPoint, double dataValue) {
		super();
		this.companyCode = companyCode;
		this.stockExchange = stockExchange;
		this.dataPoint = dataPoint.toString();
		this.dataValue = dataValue;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getstockExchange() {
		return stockExchange;
	}

	public void setstockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}

	public String getDataPoint() {
		return dataPoint;
	}

	public void setDataPoint(String dataPoint) {
		this.dataPoint = dataPoint;
	}

	public double getDataValue() {
		return dataValue;
	}

	public void setDataValue(double dataValue) {
		this.dataValue = dataValue;
	}

	@Override
	public String toString() {
		return "StockPriceOnPeriod [CompanyCode=" + companyCode + ", stockExchange=" + stockExchange + ", dataPoint="
				+ dataPoint + ", dataValue=" + dataValue + "]";
	}

}
