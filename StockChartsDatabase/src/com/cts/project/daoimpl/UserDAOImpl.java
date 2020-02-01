package com.cts.project.daoimpl;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.cts.project.bean.User;
import com.cts.project.dao.UserDAO;
import com.cts.project.hibernate.HibernateUtil;

public class UserDAOImpl implements UserDAO {

	SessionFactory sessionFactory = HibernateUtil.getSessionFactory();

	@Override
	public boolean saveUser(User user) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(user);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean updateser(User user) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.update(user);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteUser(User user) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.delete(user);
			transaction.commit();
			session.close();
			return true;
		} catch (HibernateException e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public User getUserById(int id) {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			User user = session.get(User.class, id);
			transaction.commit();
			session.close();
			return user;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<User> getAllUsers() {
		try {
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			List<User> users = session.createQuery("FROM User").list();
			transaction.commit();
			session.close();
			return users;
		} catch (HibernateException e) {
			e.printStackTrace();
			return null;
		}
	}
}
