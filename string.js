// 1.take two strings with spaces at starting of one string and at the ending of another string remove the spaces and concat the both string and convert the combined string into uppercase string. 


var str1="            hello"; 
var str2="world              ";
var remove_space_str1=str1.trimStart(); 
var remove_space_str2=str2.trimEnd();
var combinedstr=remove_space_str1.concat(remove_space_str2);
var upper_space_str=combinedstr.toUpperCase();
console.log(upper_space_str)

// 2.Extract Middle Portion of the string and get the last index of char of extracted string and Convert the portion to Lowercase. 
var str="VENNELA"
var middle_portion=str.slice(2,5)
var las_index=middle_portion.indexOf("E")
var lower_case_str=middle_portion.toLowerCase();
console.log(lower_case_str)

// 3.take a single char and concat string to that char and convert the resulted string to uppercase and then extract the last second char .
singlechar="a"
string="vennela"
concatinetedstring=singlechar.concat(string);
upper_case_str=concatinetedstring.toUpperCase();
lastsecondchar=upper_case_str[upper_case_str.length-2];
console.log(lastsecondchar)

// 4.we have 2 string and extract first 3 chars of first string and extra last 3 chars of another string and concat those 2 results together and first char and last char of the resulted concatinated string should as uppercase.
//
var str1="abcd"
console.log(str1)
var extract_first3charstr1=str1.slice(0,3)
console.log(extract_first3charstr1)
var str2="efgh"
console.log(str2)
var extract_last3charstr2=str2.slice(-3)
console.log(extract_last3charstr2)
var concat_bothstrings=extract_first3charstr1.concat(extract_last3charstr2)
console.log(concat_bothstrings)
var first_last_upper= concat_bothstrings.charAt(0).toUpperCase()+
concat_bothstrings.slice(1,length-1)+concat_bothstrings.charAt(concat_bothstrings.length-1).toUpperCase()
console.log(first_last_upper)

// 5.You are given a string with extra spaces at the beginning and end.You need to trim the string, make the first and last characters uppercase, extract a specific part of the string, concatenate it with another string
var str1="               vennela             ";
console.log(str1)
var trimstr1=str1.trim();
console.log(trimstr1)
var first_last_upper=trimstr1.charAt(0).toUpperCase()+trimstr1.slice(1,length-1)+trimstr1.charAt(trimstr1.length-1).toUpperCase()
console.log( first_last_upper);
var extract_specific_part=trimstr1.slice(2,4)
console.log(extract_specific_part)
var str2="katkam"
var concat_str= extract_specific_part.concat(str2);
console.log(concat_str)
// 6."hello there , how are you " find the index of are word in the sentence.
var str="hello there , how are you "
console.log(str)
var index_are=str.indexOf("are")
console.log(index_are)



