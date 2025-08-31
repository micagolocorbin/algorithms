defmodule Solution do
  def two_number_sum_solution(numsArr, targetSum) do
    case two_number_sum_reduce(numsArr, targetSum) do
      result when is_list(result) -> result
      _ -> []
    end
  end

  defp two_number_sum_reduce(numsArr, targetSum) do
    Enum.reduce_while(numsArr, %{}, fn num, acc ->
      potentialMatch = targetSum - num

      if Map.get(acc, potentialMatch) do
        {:halt, [potentialMatch, num]}
      else
        {:cont, Map.put(acc, num, true)}
      end
    end)
  end

  def two_number_sum_solution_01(numsArr, targetSum) do
    two_number_sum_solution_01(numsArr, targetSum, %{})
  end

  defp two_number_sum_solution_01([], _targetSum, _numsMap), do: []

  defp two_number_sum_solution_01([num | tail], targetSum, numsMap) do
    potentialMatch = targetSum - num

    case Map.get(numsMap, potentialMatch) do
      nil -> two_number_sum_solution_01(tail, targetSum, Map.put(numsMap, num, true))
      _result -> [potentialMatch, num]
    end
  end
end

arr = [-4, -1, 1, 3, 5, 6, 8, 11]
target = 10
Solution.two_number_sum_solution(arr, target) |> IO.inspect()
Solution.two_number_sum_solution_01(arr, target) |> IO.inspect()
