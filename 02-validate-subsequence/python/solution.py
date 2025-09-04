def validate_subsequence(array, sequence):
    arr_idx = 0
    seq_idx = 0
    while arr_idx < len(array) and seq_idx < len(sequence):
        if array[arr_idx] == sequence[seq_idx]:
            seq_idx += 1
        arr_idx += 1
    return seq_idx == len(sequence)


def validate_subsequence_01(array, sequence):
    seq_idx = 0
    for num in array:
        if seq_idx == len(sequence):
            break
        if sequence[seq_idx] == num:
            seq_idx += 1
    return seq_idx == len(sequence)


original_array = [5, 1, 22, 25, 6, -1, 8, 10]
potential_subsequence = [1, 6, -1, 10]

print(validate_subsequence(original_array, potential_subsequence))
print(validate_subsequence_01(original_array, potential_subsequence))
