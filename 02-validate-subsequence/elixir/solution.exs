defmodule Solution do
  def validate_subsequence(array, sequence) do
    MapSet.subset?(MapSet.new(sequence), MapSet.new(array))
  end

  def validate_subsequence_01(array, sequence) do
    Enum.all?(sequence, fn num -> Enum.member?(array, num) end)
  end

def validate_subsequence_02(array, sequence) do
  validate_subsequence_02(array, sequence, 0, 0)
end

defp validate_subsequence_02(_array, sequence, _arr_idx, seq_idx)when seq_idx == length(sequence), do: true

defp validate_subsequence_02(array, _sequence, arr_idx, _seq_idx) when arr_idx >= length(array), do: false

defp validate_subsequence_02(array, sequence, arr_idx, seq_idx) do
    current_array_elem = Enum.at(array, arr_idx)
    current_seq_elem = Enum.at(sequence, seq_idx)

    if current_array_elem == current_seq_elem do
      validate_subsequence_02(array, sequence, arr_idx+1, seq_idx+1)
    else
      validate_subsequence_02(array, sequence, arr_idx+1, seq_idx)
    end
end
end

original_array = [5, 1, 22, 25, 6, -1, 8, 10]
potential_subsequence = [1, 6, -1, 10]

Solution.validate_subsequence(original_array, potential_subsequence) |> IO.inspect()
Solution.validate_subsequence_01(original_array, potential_subsequence) |> IO.inspect()
Solution.validate_subsequence_02(original_array, potential_subsequence) |> IO.inspect()
