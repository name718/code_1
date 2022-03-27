from lxml import etree
import xlwt
import pymysql


class save_grade:
    def __init__(self, response):
        self.response = response

    def get_data(self):
        items = []
        data = etree.HTML(self.response.text)
        cj = data.xpath("//table[@class='datelist']//tr")
        for i in cj:
            cjq = i.xpath("./td//text()")
            items.append(cjq)
        return items

    def get_info(self):
        Info = []
        data = etree.HTML(self.response.text)
        Info_data = data.xpath("//div[@class='searchbox'][1]/p[@class='search_con']//span")
        for i in Info_data:
            Info.append(i.xpath("./text()")[0])
        return Info

    def save(self):
        book = xlwt.Workbook()
        sheet1 = book.add_sheet('全部成绩', cell_overwrite_ok=True)
        # 列表的每一行写入一门课成绩，最开始的行为0行，写入表格头：
        items = self.get_data()
        Info = self.get_info()
        sheet1.write(0, 0, Info)
        m = 1
        for list in items[:-17]:
            n = 0
            # 对小列表里每个元素进行遍历
            for info in list:
                # 将每个元素写入表格
                sheet1.write(m, n, info)
                n += 1
            m += 1
        book.save('grade.xls')
        print("你的全部成绩以保存保存成功")
