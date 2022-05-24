def fibonacci(n):
  starting_nums = [0, 1]
  for i in range(1, n):
    starting_nums.append(starting_nums[-1] + starting_nums[-2])
  return starting_nums[n]


