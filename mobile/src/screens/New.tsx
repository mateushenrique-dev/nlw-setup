
import { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { BackButton } from '../components/BackButton';
import { Checkbox } from '../components/Checkbox';
import { Feather } from "@expo/vector-icons"
import color from "tailwindcss/colors"

const avaiableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([])

  function handleToggleWeekDays(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"
          placeholder='ex.: Beber 2L agua, se exercitar, etc...'
          placeholderTextColor={color.zinc[400]}
        />

        <Text className='font-semibold mt-4 mb-3 text-white text-base'>Qual a recorrência?</Text>

        {
          avaiableWeekDays.map((weekDay, index) => (
            <Checkbox
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDays(index)}
            />
          ))
        }

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row w-full h-14 items-center justify-center bg-green-600 rounded-md mt-6"
        >
          <Feather
            name="check"
            size={20}
            color={color.white}
          />

          <Text className="font-semibold text-base text-white ml-2">
            Confirmar 
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}