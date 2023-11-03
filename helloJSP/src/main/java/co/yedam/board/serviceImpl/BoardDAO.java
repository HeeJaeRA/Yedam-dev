package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;

public class BoardDAO {
	DataSource ds = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;

	private void close() {
		try {
			if (rs != null)
				rs.close();
			if (psmt != null)
				psmt.close();
			if (conn != null)
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public int insert(BoardVO vo) {
		String sql = "INSERT INTO BOARD (BOARD_NO, TITLE, CONTENT, WRITER) VALUES (SEQ_BOARD.NEXTVAL, ?, ?, ?)";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getWriter());

			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}

	public int update(BoardVO vo) {
		String sql = "UPDATE BOARD SET TITLE = ?, CONTENT = ?, IMAGE = NVL(?, IMAGE), LAST_UPDATE = SYSDATE WHERE BOARD_NO = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getImage());
			psmt.setInt(4, vo.getBoardNo());

			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}

	public int delete(int boardNo) {
		String sql = "DELETE FROM BOARD WHERE BOARD_NO = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);

			int r = psmt.executeUpdate();
			return r;
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return 0;
	}

	public List<BoardVO> list() {
		List<BoardVO> boards = new ArrayList<>();
		BoardVO vo;
		String sql = "SELECT * FROM BOARD ORDER BY BOARD_NO";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while (rs.next()) {
				vo = new BoardVO();
				vo.setBoardNo(rs.getInt("BOARD_NO"));
				vo.setTitle(rs.getString("TITLE"));
				vo.setContent(rs.getString("CONTENT"));
				vo.setWriter(rs.getString("WRITER"));
				vo.setWriteDate(rs.getDate("WRITE_DATE"));
				vo.setViewCnt(rs.getInt("VIEW_CNT"));
				vo.setImage(rs.getString("IMAGE"));
				vo.setLastUpdate(rs.getDate("LAST_UPDATE"));
				boards.add(vo);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return boards;
	}

	public BoardVO getBoard(int boardNo) {
		BoardVO vo;
		String sql = "SELECT * FROM BOARD WHERE BOARD_NO = ? ORDER BY BOARD_NO";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			rs = psmt.executeQuery();

			vo = new BoardVO();
			if (rs.next()) {
				vo.setBoardNo(rs.getInt("BOARD_NO"));
				vo.setTitle(rs.getString("TITLE"));
				vo.setContent(rs.getString("CONTENT"));
				vo.setWriter(rs.getString("WRITER"));
				vo.setWriteDate(rs.getDate("WRITE_DATE"));
				vo.setViewCnt(rs.getInt("VIEW_CNT"));
				vo.setImage(rs.getString("IMAGE"));
				vo.setLastUpdate(rs.getDate("LAST_UPDATE"));
				return vo;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return null;
	}
	
	public int updateCnt(int boardNo) {
		String sql = "UPDATE BOARD SET VIEW_CNT = VIEW_CNT + 1 WHERE BOARD_NO = ?";
		conn = ds.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			
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
