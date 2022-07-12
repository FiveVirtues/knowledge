---
title: 数据结构与算法-力扣刷题记录
categories:
- base
tags:
- algorithms
author: causes
---

## 准备

刷题顺序参考[代码随想录](https://github.com/youngyangyang04/leetcode-master)

## 数组

[704 二分查找](https://leetcode.cn/problems/binary-search/)

给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

示例 2:

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

提示：

1. 你可以假设 nums 中的所有元素是不重复的。
1. n 将在 [1, 10000]之间。
1. nums 的每个元素都将在 [-9999, 9999]之间。

思路：

1. 解题顺序是首先考虑普遍情况，然后考虑特殊情况。
1. 使用卡范围的方式，定义两个游标 `left`、`right`，基本原则是 `left >= right`。


解题：

```java
class Solution {
  public static void main(String[] args) {
    int[] arr = {-1, 0, 3, 5, 9, 12};
    System.out.println(search(arr, 12));
  }

  public static int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    if (target > nums[right] || target < nums[0]) {
      return -1;
    }
    int mid = (right + left) / 2;
    while (target != nums[mid]) {
      if (left >= right) {
        return -1;
      }
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      }
      mid = (right + left) / 2;
    }
    return mid;
  }
}
```
---

[27. 移除元素](https://leetcode.cn/problems/remove-element/)

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1：

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

示例 2：

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

提示：

```
0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
```

思路：

1. 两个指针，一左一右，开始 left 在最左边，right 在最右边。
1. left 指针判断当前元素是否为指定值，若为指定值，则次元素和 rignt 对应的元素交换值。right 向左走一步。
1. left 再次判断，若为指定值，重复上一步。若不为指定值，left 向右走一步。
1. 当 left == right 时，判断 left 所在元素的数值，假如为 val，返回 left，不为 val 返回 left + 1

解题：

```java
class Solution {
  public int removeElement(int[] nums, int val) {
    if (nums.length < 1) {
      return 0;
    }
    int left = 0;
    int right = nums.length - 1;
    int temp;
    while (true) {
      if (left == right) {
        return nums[left] == val ? left : left + 1;
      }
      if (nums[left] == val) {
        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = nums[left];
        right = right - 1;
        continue;
      }
      left = left + 1;
    }
  }
}
```
