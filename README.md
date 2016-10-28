# ips
Ip chellenge
Question

Given a string with integers from 0 to 9 (inclusive), with the length between 0 and 10000, find combinations of valid IPs that can result from a sequence of those numbers and return it as a string , with every ip separated by an underscore (' _ '), after the standard ip format (xyz.xyz.xyz.xyz where 0 < xyz < 255).
(a "sequence" means a substring with a maximum length of 12 characters long, with every number maintaining its neighbors from the main string)

The IPs combinations must be ordered by the number of digits each one of the four groups has, starting with the one that has the most digits in the rightmost group (x.x.x.xyz) and ending with the one that has the most digits in the leftmost group (xyz.x.x.x), like in the example below.

If any of the for groups starts with 0 and has at least 2 digits, you should print only the rightmost non-zero digit.
(xyz.00z.0yz.x should be printed as xyz.z.yz.x).

If there are no valid IPs that can be formed from the string of numbers, an empty string should be returned instead.

INPUT
int str_numbers_len, string str_numbers

OUTPUT
string list_of_IPs

CONSTRAINTS
4 <= str_len <= 10000

EXAMPLE 1
Input
7
1074389

Output
"1.0.7.4
1.0.7.43
1.0.74.3
1.7.4.3
10.7.4.3
1.0.74.38
1.7.4.38
1.7.43.8
1.74.3.8
10.7.4.38
10.7.43.8
10.74.3.8
107.4.3.8
1.7.43.89
1.74.3.89
1.74.38.9
10.7.43.89
10.74.3.89
10.74.38.9
107.4.3.89
107.4.38.9
107.43.8.9
0.7.4.3
0.7.4.38
0.7.43.8
0.74.3.8
7.4.3.8
0.7.43.89
0.74.3.89
0.74.38.9
7.4.3.89
7.4.38.9
7.43.8.9
74.3.8.9
7.4.3.8
7.4.3.89
7.4.38.9
7.43.8.9
74.3.8.9
4.3.8.9"

EXAMPLE 2
Input
9
123456789

Output
"1.2.3.4
1.2.3.45
1.2.34.5
1.23.4.5
12.3.4.5
1.2.34.56
1.23.4.56
1.23.45.6
1.234.5.6
12.3.4.56
12.3.45.6
12.34.5.6
123.4.5.6
1.23.45.67
1.234.5.67
1.234.56.7
12.3.45.67
12.34.5.67
12.34.56.7
123.4.5.67
123.4.56.7
123.45.6.7
1.234.56.78
12.34.56.78
123.4.56.78
123.45.6.78
123.45.67.8
123.45.67.89
2.3.4.5
2.3.4.56
2.3.45.6
2.34.5.6
23.4.5.6
2.3.45.67
2.34.5.67
2.34.56.7
23.4.5.67
23.4.56.7
23.45.6.7
234.5.6.7
2.34.56.78
23.4.56.78
23.45.6.78
23.45.67.8
234.5.6.78
234.5.67.8
234.56.7.8
23.45.67.89
234.5.67.89
234.56.7.89
234.56.78.9
3.4.5.6
3.4.5.67
3.4.56.7
3.45.6.7
34.5.6.7
3.4.56.78
3.45.6.78
3.45.67.8
34.5.6.78
34.5.67.8
34.56.7.8
3.45.67.89
34.5.67.89
34.56.7.89
34.56.78.9
4.5.6.7
4.5.6.78
4.5.67.8
4.56.7.8
45.6.7.8
4.5.67.89
4.56.7.89
4.56.78.9
45.6.7.89
45.6.78.9
45.67.8.9
5.6.7.8
5.6.7.89
5.6.78.9
5.67.8.9
56.7.8.9
6.7.8.9"
