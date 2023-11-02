package co.yedam.student.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

public class StudentDAO {
	DataSource ds = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	private void close() {
		try {
			if (rs != null) rs.close();
			if (psmt != null) psmt.close();
			if (conn != null) conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public int insert(StudentVO vo) {
		String sql = "INSERT INTO STUDENT(STUDENT_ID, STUDENT_NAME, STUDENT_PASSWORD, STUDENT_DEPT, STUDENT_BIRTHDAY) VALUES (?,?,?,?,?)";
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getStudentId());
			psmt.setString(2,vo.getStudentName());
			psmt.setString(3,vo.getStudentPassword());
			psmt.setString(4,vo.getStudentDept());
			psmt.setString(5, sdf.format(vo.getStudentBirthday()));
			
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	
	public int update(StudentVO vo) {
		String sql = "UPDATE STUDENT SET STUDENT_NAME = ?, STUDENT_PASSWORD = ?, STUDENT_DEPT = NVL(?, STUDENT_DEPT), STUDENT_BIRTHDAY = ? WHERE STUDENT_ID = ?";
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getStudentName());
			psmt.setString(2,vo.getStudentPassword());
			psmt.setString(3,vo.getStudentDept());
			psmt.setString(4, sdf.format(vo.getStudentBirthday()));
			psmt.setString(5,vo.getStudentId());
			
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	
	public int delete(String sid) {
		String sql = "DELETE FROM STUDENT WHERE STUDENT_ID = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			
			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}
	
	public List<StudentVO> list() {
		List<StudentVO> students = new ArrayList<>();
		StudentVO vo;
		String sql = "SELECT * FROM STUDENT";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				vo = new StudentVO();
				vo.setStudentId(rs.getString("STUDENT_ID"));
				vo.setStudentName(rs.getString("STUDENT_NAME"));
				vo.setStudentPassword(rs.getString("STUDENT_PASSWORD"));
				vo.setStudentDept(rs.getString("STUDENT_DEPT"));
				vo.setStudentBirthday(rs.getDate("STUDENT_BIRTHDAY"));
				students.add(vo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return students;
	}
	
	public StudentVO select(String sid) {
		StudentVO vo;
		String sql = "SELECT * FROM STUDENT WHERE STUDENT_ID = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, sid);
			rs = psmt.executeQuery();
			
			vo = new StudentVO();
			if (rs.next()) {
				vo.setStudentId(rs.getString("STUDENT_ID"));
				vo.setStudentName(rs.getString("STUDENT_NAME"));
				vo.setStudentPassword(rs.getString("STUDENT_PASSWORD"));
				vo.setStudentDept(rs.getString("STUDENT_DEPT"));
				vo.setStudentBirthday(rs.getDate("STUDENT_BIRTHDAY"));				
				return vo;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return null;
	}

}
