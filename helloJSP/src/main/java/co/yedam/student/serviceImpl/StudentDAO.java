package co.yedam.student.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;

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

}
