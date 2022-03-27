import requests
from lxml import etree
import re


class open_llq:
    def __init__(self, Id, Password):
        self.header = {
            'User - Agent': 'Mozilla / 5.0(Macintosh;IntelMacOSX10_15_3) AppleWebKit / 537.36(KHTML, likeGecko) '
                            'Chrome / 80.0.3987.122Safari / 537.36'}
        self.url = 'http://202.199.115.46'
        self.__real_url = self.__get_real_url()
        self.Id = Id
        self.__Password = Password
        self.session = re.findall('http://202.199.115.46/(\(.*?\))', self.__real_url)[0]

    # 获取带有session ID的url
    def __get_real_url(self):
        response = requests.get(url=self.url, headers=self.header)
        real_url = response.url[:len(response.url) - len('default2.aspx')]
        return real_url

    # 获取验证码
    def __get_code(self):
        request = requests.get(url=self.__real_url + '/CheckCode.aspx', headers=self.header)
        with open('yzm.png', 'wb') as f:
            f.write(request.content)
        code = input("请输入验证码:\n")
        return code

    def __get_login_data(self):
        res = requests.get(self.__real_url)
        res.encoding = 'gbk'
        data = etree.HTML(res.text)
        viewstate = data.xpath("//input[@name='__VIEWSTATE']/@value")[0]

        code = self.__get_code()

        data = {
            '__VIEWSTATE': viewstate,
            'txtUserName': self.Id,
            'Textbox1': '',
            'TextBox2': self.__Password,
            'txtSecretCode': code,
            'RadioButtonList1': '学生'.encode('gb2312'),
            'Button1': '',
            'lbLanguage': '',
            'hidPdrs': '',
            'hidsc': ''
        }
        return data

    def login(self):
        response = requests.post(url=self.__real_url + 'default2.aspx', headers=self.header,
                                 data=self.__get_login_data())
        response.encoding = 'gbk'
        data = etree.HTML(response.text)
        name = data.xpath("//div[@class='info']//span[@id='Label3']/text()")[0]
        self.name = name
        if name:
            print(data.xpath("//div[@class='info']//span[@id='Label3']/text()")[0],
                  data.xpath("//div[@class='info']//span[@id='xhxm']/text()")[0])
        else:
            print("登陆失败")
