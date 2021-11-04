# -- Description: --
# You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.
#
# If the string matches, return true else false.

# -- For example: --
# solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string.
# solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string.
# solve("codewars","codewars") = true, because the strings already match.
# solve("a","b") = false
# solve("*", "codewars") = true

# -- test cases: --
# test.it("Basic tests")
# test.assert_equals(solve("code*s","codewars"),True)
# test.assert_equals(solve("codewar*s","codewars"), True)
# test.assert_equals(solve("code*warrior","codewars"),False)
# test.assert_equals(solve("c","c"),True)
# test.assert_equals(solve("*s","codewars"),True)
# test.assert_equals(solve("*s","s"), True)
# test.assert_equals(solve("s*","s"),True)
# test.assert_equals(solve("aa","aaa"), False)
# test.assert_equals(solve("aa*","aaa"), True)
# test.assert_equals(solve("aaa","aa"), False)
# test.assert_equals(solve("aaa*","aa"), False)
# test.assert_equals(solve("*","codewars"),True)
# test.assert_equals(solve("aaa*aaa", "aaa"), False)


def solve(a,b):
    # if a equals b, return True
    if a == b: return True
    # if there is no asterik in a, then return False
    if "*" not in a: return False

    # because there is only one asterik, per the prompt
    # split word a by the asterik
    # we now have a list of two half words
    split = a.split("*")
    print("split > ", split)

    # establish a range
    # this range will be applied to word b
    # to get the chars out of b needed to tie together word a

    # range starts with:
    # the length of the first half of the word (first item in split list)
    # ends with:
    # the length of the master word (b) minus the length of the second half of the split word

    missing = b[len(split[0]):len(b)-len(split[1])]
    print("split[0] > ", split[0])
    print("len(b) > ", len(b))
    print("split[1] > ", split[1])
    print("missing > ", missing)

    # if you can replace the * in original word "a"
    # with the new range "missing"
    # and it equals word "b"
    # then return True

    c = a.replace("*", missing)
    print("replacing * with missing > ", c)

    print("original b > ", b)

    if c == b:
        return True
