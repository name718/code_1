ops_rule = {
    '+':1,
    '-':1,
    '*':2,
    '/':2
}
def mid_to_after(s):
    print(s)
    expression = []
    ops = []
    ss = []
    for _s in s:
        ss.append(_s)
    # print(ss)
    for item in ss:
        if item in ['+','-','*','/']:
            while len(ops) >= 0:
                if len(ops) == 0:
                    ops.append(item)
                    break
                op = ops.pop()
                if op == '(' or ops_rule[item] > ops_rule[op]:
                    ops.append(op)
                    ops.append(item)
                    break
                else:
                    expression.append(op)
        elif item == '(':
            ops.append(item)
        elif item == ')':
            while len(ops) > 0:
                op = ops.pop()
                if op == '(':
                    break
                else:
                    expression.append(op)
        else:
            expression.append(item)
        while len(op) > 0:
            expression.append(ops.pop())
        return expression
def expression_to_value(expression):
    stack_value = []
    for item in expression:
        if item in ['+','-','*','/']:
            n2 = stack_value.pop()
            n1 = stack_value.pop()
            result = cal(n1,n2,item)
            stack_value.append(result)
        else:
            stack_value.append(int(item))
        return stack_value[0]
def cal(n1,n2,op):
    if op == '+':
        return n1 + n2
    if op == '-':
        return n1 - n2
    if op == '*':
        return n1 * n2
    if op == '/':
        return n1 / n2

ex = mid_to_after('(a+b)*c-(a+b)/e')
print(ex)
# print(expression_to_value(ex))
