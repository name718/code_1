let str = "safksagajk&*efdsnKN$$&=1"
let str1 = "abcd"
let str2 = "efgh"
// charAt(num) // 得到指定索引位置的单字符
// charCodeAt(num) // 得到指定索引位置字符的Unicode值 (ascii为其子集)
// indexOf("str") // 取str第一次出现的索引,找不到返回-1
// lastIndexOf("str") // 取str最后一次出现的索引
// replace( "oldStr" , "newStr" ) // 找到oldStr替换为newStr
// slice( start , end ) // 其对象可以是字符串or数组 , 记得其范围不包括end
// substr( start , length ) // 从索引start开始取length个字符 , length不可小于0否则返回空字符串
// search("str") // 在str01中搜索字符串"str" , 返回其第一个字符在str01中的索引
//  String.fromCharCode(uniNum,uniNum) // 参数为Unicode值 ( >=1个即可)
//  str01.localeCompare(str02) // 以本地特定规则比较 , 若str01>str02 = 1 反之-1 相等为0
//  str03 = str02.valueOf() ; // 可返回字符串对象(str02)的原始值
//  str03 = str01.split("str") // 将原字符串分割为一个数组对象 , 分隔符为逗号 , 参数为 空 空格 字符串
//  var n = num.toString() // 将Number对象=>String对象(n为字符) , 源对象没变
//  toLowerCase(): 把字符串转为小写，返回新的字符串。
//  toUpperCase(): 把字符串转为大写，返回新的字符串。
//  substring(): 提取字符串中介于两个指定下标之间的字符。
//  replace(): 在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
//  match(): 返回所有查找的关键字内容的数组。