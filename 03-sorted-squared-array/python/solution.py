def sorted_squared_array(array):
    sorted_squares = [0 for _ in array]

    for idx, num in enumerate(array):
        sorted_squares[idx] = num * num

    sorted_squares.sort()
    return sorted_squares


def sorted_squared_array_01(array):
    sorted_squares = [0 for _ in array]
    left_idx = 0
    right_idx = len(array) - 1

    for idx in reversed(range(len(array))):
        left_value = array[left_idx]
        right_value = array[right_idx]

        if abs(left_value) > abs(right_value):
            sorted_squares[idx] = left_value * left_value
            left_idx += 1
        else:
            sorted_squares[idx] = right_value * right_value
            right_idx -= 1
    return sorted_squares


array_to_sort = [1, 2, 3, 5, 6, 8, 9]
array_to_sort_01 = [-7, -5, -4, 3, 6, 8, 9]

print(sorted_squared_array(array_to_sort))
print(sorted_squared_array(array_to_sort_01))

print(sorted_squared_array_01(array_to_sort))
print(sorted_squared_array_01(array_to_sort_01))
