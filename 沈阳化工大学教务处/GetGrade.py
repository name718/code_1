from lxml import etree
import requests

class get_grade:
    def __init__(self, session, ID, name):
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/80.0.3987.122 Safari/537.36'}
        self.header1 = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/80.0.3987.122 Safari/537.36'}
        self.session = session
        self.data = {
            'xh': ID,
            'xm': name.encode('gb2312'),
            'gnmkdm': 'N121605'
        }
        self.url = 'http://202.199.115.46/' + session + '/xscj_gc.aspx?xh=' + ID + '&xm=' + name + '&gnmkdm=N121605'

    def get__VIEWSTATE(self):
        self.header['Referer'] = 'http://202.199.115.46/' + self.session + '/'
        response = requests.get(url=self.url, headers=self.header, data=self.data)
        response.encoding = 'gbk'
        data = etree.HTML(response.text)
        viewstate = data.xpath("//input[@name='__VIEWSTATE']/@value")[0]
        return viewstate

    def Form_data(self):
        form_data = {
            '__VIEWSTATE': self.get__VIEWSTATE(),
            'ddlXN': '',
            'ddlXQ': '',
            'Button1': '按学期查询'.encode('gb2312'),
        }
        return form_data

    def get_page(self):
        self.header1['Referer'] = self.url
        response = requests.post(url=self.url, headers=self.header, data=self.Form_data())
        response.encoding = 'gbk'
        return response