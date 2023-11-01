package co.yedam.common;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MainExe {

	public static void main(String[] args) {
		// TODO 자동 생성된 메소드 스텁
		DataSource ds = DataSource.getInstance();
		Connection conn = ds.getConnection();
		try {
			PreparedStatement psmt = conn.prepareStatement("SELECT * FROM STUDENT");
			ResultSet rs = psmt.executeQuery();
			while (rs.next()) {
				System.out.println(rs.getString(1));
				System.out.println(rs.getString(2));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
