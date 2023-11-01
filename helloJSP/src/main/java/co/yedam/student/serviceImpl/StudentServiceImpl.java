package co.yedam.student.serviceImpl;

import java.util.List;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;

public class StudentServiceImpl implements StudentService{
	StudentDAO dao = new StudentDAO();
	
	@Override
	public boolean addStudent(StudentVO vo) {
		dao.insert(vo);
		return true;
	}

	@Override
	public boolean editStudent(StudentVO vo) {
		dao.update(vo);
		return true;
	}

	@Override
	public boolean removeStudent(String sid) {
		dao.delete(sid);
		return true;
	}

	@Override
	public List<StudentVO> listStudent() {
		List<StudentVO> list = dao.list();
		return list;
	}

	@Override
	public StudentVO getStudent(String sid) {
		StudentVO vo = dao.select(sid);
		return vo;
	}

}
