package com.cts.project.daoimpl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.project.bean.IPODetailEntry;
import com.cts.project.dao.IPODetailEntryDAO;
import com.cts.project.hibernate.HibernateUtil;

public class IPODetailEntryDAOImpl implements IPODetailEntryDAO {

	SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@Override
	public boolean saveIPODeatail(IPODetailEntry IPODetail) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(IPODetail);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateIPODetail(IPODetailEntry IPODetail) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.update(IPODetail);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteIPODetail(IPODetailEntry IPODetail) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.delete(IPODetail);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public IPODetailEntry getIPODetailById(int id) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			IPODetailEntry ipoEntry = session.get(IPODetailEntry.class, id);
			transaction.commit();
			session.close();
			return ipoEntry;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<IPODetailEntry> getAllIPODetails() {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			List<IPODetailEntry> list = session.createQuery("FROM IPODetailEntry").list();
			transaction.commit();
			session.close();
			return list;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

}
