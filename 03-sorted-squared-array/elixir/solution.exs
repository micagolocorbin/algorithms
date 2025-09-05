defmodule Solution do
  def sorted_squared_array(array) do
    Enum.map(array, fn num -> num * num end) |> Enum.sort()
  end

  def sorted_squared_array_01(array) do
    sorted_squared_array_01(array, [])
  end

  defp sorted_squared_array_01([], state), do: Enum.sort(state)

  defp sorted_squared_array_01([h | tail], state) do
    sorted_squared_array_01(tail, [h * h | state])
  end
end

array_to_sort = [1, 2, 3, 5, 6, 8, 9]
array_to_sort_01 = [-7, -5, -4, 3, 6, 8, 9]

Solution.sorted_squared_array(array_to_sort) |> IO.inspect()
Solution.sorted_squared_array(array_to_sort_01) |> IO.inspect()

Solution.sorted_squared_array_01(array_to_sort) |> IO.inspect()
Solution.sorted_squared_array_01(array_to_sort_01) |> IO.inspect()
