package org.yedam.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;
import org.yedam.service.BookService;
import org.yedam.service.BookVO;

public class BookServiceImpl implements BookService{
	
	DataSource dataSource = DataSource.getInstance();
	Connection conn = dataSource.getConnection();
	PreparedStatement psmt;
	ResultSet rs;
	
	
	private void close() {
		try {
			if (psmt != null) psmt.close();
			if (conn != null) conn.close();
		} catch(SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<BookVO> bookList() {
		List<BookVO> books = new ArrayList<>();
		BookVO vo;
		String sql = "SELECT * FROM BOOK";
		try {
			conn = dataSource.getConnection();
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				vo = new BookVO();
				vo.setBookCode(rs.getString("BOOK_CODE"));
				vo.setBookTitle(rs.getString("BOOK_TITLE"));
				vo.setBookAuthor(rs.getString("BOOK_AUTHOR"));
				vo.setBookPress(rs.getString("BOOK_PRESS"));
				vo.setBookPrice(rs.getInt("BOOK_PRICE"));
				books.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return books;
	}

}
