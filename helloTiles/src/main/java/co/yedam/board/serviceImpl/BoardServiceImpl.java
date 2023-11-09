package co.yedam.board.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.admin.service.MemberVO;
import co.yedam.board.mapper.BoardMapper;
import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSourceMybatis;

public class BoardServiceImpl implements BoardService {
	
	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true);
	
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);
	

	@Override
	public boolean addBoard(BoardVO vo) {
		return (mapper.insert(vo) == 1);
	}

	@Override
	public boolean editBoard(BoardVO vo) {
		return (mapper.update(vo) == 1);
	}

	@Override
	public boolean removeBoard(int boardNo) {
		return (mapper.delete(boardNo) == 1);
	}

	@Override
	public List<BoardVO> boardList() {
		return mapper.selectList();
	}

	@Override
	public BoardVO getBoard(int boardNo) {
		mapper.updateCnt(boardNo);
		return mapper.select(boardNo);
	}
	
	@Override
	public MemberVO loginCheck(String id, String pw) {
		return mapper.getUser(id, pw);
	}

	@Override
	public List<MemberVO> memberList() {
		return mapper.selectMem();
	}
	

}
