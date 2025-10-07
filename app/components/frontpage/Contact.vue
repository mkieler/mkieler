<script setup lang="ts">
import { reactive, ref } from 'vue'

import type { CmsContactContent } from '~/types/cms'

const props = defineProps<{
  contact: CmsContactContent
}>()

const formState = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive<Record<string, string>>({})
const submissionState = ref<'idle' | 'success'>('idle')

const validate = () => {
  errors.name = props.contact.form.fields.find((field) => field.name === 'name' && field.required) && !formState.name
    ? 'Please add your name.'
    : ''

  errors.email = props.contact.form.fields.find((field) => field.name === 'email' && field.required) && !formState.email
    ? 'An email address is required.'
    : ''

  if (!errors.email && formState.email) {
    const emailPattern = /\S+@\S+\.\S+/
    errors.email = emailPattern.test(formState.email) ? '' : 'Use a valid email address.'
  }

  errors.message = props.contact.form.fields.find((field) => field.name === 'message' && field.required) && !formState.message
    ? 'Please tell me a bit about the work.'
    : ''

  return !errors.name && !errors.email && !errors.message
}

const onSubmit = () => {
  submissionState.value = 'idle'

  if (!validate()) {
    return
  }

  submissionState.value = 'success'
}
</script>

<template>
  <section id="contact" class="py-20">
    <UContainer class="space-y-12">
      <UiSectionHeading
        eyebrow="Contact"
        :title="props.contact.headline"
        :description="props.contact.description"
      />

      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        <div class="space-y-6">
          <p class="text-gray-600 dark:text-gray-300">
            {{ props.contact.availability }}
          </p>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Preferred channels
            </h3>
            <ul class="space-y-2">
              <li
                v-for="channel in props.contact.channels"
                :key="channel.id"
                class="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white/60 px-4 py-3 text-gray-700 backdrop-blur transition hover:border-primary-300 dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-200"
              >
                <div class="flex items-center gap-3">
                  <UIcon v-if="channel.icon" :name="channel.icon" class="h-5 w-5 text-primary-500" />
                  <span>{{ channel.label }}</span>
                </div>
                <UButton
                  :to="channel.href"
                  :target="channel.href.startsWith('http') ? '_blank' : undefined"
                  size="sm"
                  variant="ghost"
                  color="neutral"
                >
                  Open
                </UButton>
              </li>
            </ul>
          </div>
        </div>

        <form class="space-y-5" @submit.prevent="onSubmit" novalidate>
          <div
            v-for="field in props.contact.form.fields"
            :key="field.id"
            class="space-y-2"
          >
            <label :for="field.id" class="block text-sm font-medium text-gray-700 dark:text-gray-200">
              {{ field.label }}
            </label>

            <component
              :is="field.type === 'textarea' ? 'textarea' : 'input'"
              :id="field.id"
              v-model="formState[field.name as keyof typeof formState]"
              :name="field.name"
              :type="field.type === 'textarea' ? undefined : field.type"
              :placeholder="field.placeholder"
              :required="field.required"
              :aria-invalid="Boolean(errors[field.name])"
              :aria-describedby="errors[field.name] ? `${field.id}-error` : undefined"
              class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              :rows="field.type === 'textarea' ? 5 : undefined"
            />

            <p
              v-if="errors[field.name]"
              :id="`${field.id}-error`"
              class="text-sm text-rose-500"
              role="alert"
            >
              {{ errors[field.name] }}
            </p>
          </div>

          <div class="space-y-2">
            <UButton type="submit" color="primary" size="lg">{{ props.contact.form.submitLabel }}</UButton>
            <p
              v-if="submissionState === 'success'"
              class="text-sm text-green-600 dark:text-green-400"
              role="status"
              aria-live="polite"
            >
              Thanks! I'll reply within two business days.
            </p>
          </div>
        </form>
      </div>
    </UContainer>
  </section>
</template>
