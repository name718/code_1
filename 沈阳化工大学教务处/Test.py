import Login
import GetGrade

if __name__ == '__main__':
    Id = input("请输入学号：\n")
    password = input("请输入密码：\n")
    # 登陆
    login = Login.open_llq(Id, password)
    login.login()
    name = login.name
    session = login.session
    # 查询成绩
