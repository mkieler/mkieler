<script setup lang="ts">
    const toast = useToast();
    
    const items = [
        { label: 'Generel forespørgsel', value: 'general' },
        { label: 'Samarbejde som freelancer', value: 'freelance' },
        { label: 'Projekt samarbejde', value: 'project' },
        { label: 'Support og vedligeholdelse', value: 'support' },
        { label: 'Andet', value: 'other' },
    ]

    const formData = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: '',
    })

    async function submitForm() {
        try {
            const res = await $fetch<Response>('https://email.mkieler.com', {
                method: 'POST',
                body: formData.value,
                headers: {
                    'Content-Type': 'application/json',
                    'token': 'ae5f22dc-dede-428c-a3e5-2f8b0e30eb98'
                }
            })

            toast.add({
                title: 'Besked sendt',
                description: 'Tak for din besked! Jeg vender tilbage til dig hurtigst muligt.',
                duration: 5000,
                color: 'success'
            });
            formData.value = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                inquiryType: 'general',
                message: '',
            }
            
        } catch (error) {
            toast.add({
                title: 'Fejl ved afsendelse',
                description: 'Der opstod en fejl ved afsendelse af din besked. Prøv venligst igen senere.',
                duration: 5000,
                color: 'error'
            });
        }
        
    }
</script>


<template>
    <USlideover
        :ui="{ 
            content: 'max-w-xl px-8', 
            header: 'border-none',
            body: 'flex flex-col justify-center gap-15',
        }"
        >

        <template #body>

            <div class="flex flex-col items-center justify-center text-center gap-4 -mt-15">
                <p class="text-5xl font-bold">
                    Kontakt
                </p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400 px-4">
                    Lad os sammen løfte dit projekt til næste niveau! Få en gratis konsultation i dag. Jeg ser frem til at høre fra dig. Jeg bestræber mig på at svare inden for 24 timer på hverdage.
                </p>
            </div>

            <UForm class="flex flex-col gap-8 mt-7" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <UFormField
                        name="firstName"
                        label="Fornavn"
                        required>
                        <UInput type="text" placeholder="Indtast fornavn" class="w-full" size="xl" v-model="formData.firstName"/>
                    </UFormField>

                    <UFormField
                        name="lastName"
                        label="Efternavn"
                        required>
                        <UInput type="text" placeholder="Indtast efternavn" class="w-full" size="xl" v-model="formData.lastName"/>
                    </UFormField>
                </div>

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <UFormField
                        name="email"
                        label="E-mail"
                        required>
                        <UInput type="email" placeholder="Indtast e-mail" class="w-full" size="xl" v-model="formData.email"/>
                    </UFormField>

                    <UFormField
                        name="phone"
                        label="Telefonnummer"
                        required>
                        <UInput type="tel" placeholder="Indtast telefonnummer" class="w-full" size="xl" v-model="formData.phone"/>
                    </UFormField>
                </div>

                <UFormField
                    name="inquiryType"
                    label="Type af forespørgsel"
                    required>
                    <URadioGroup v-model="formData.inquiryType" required color="primary" variant="table" default-value="general" :items="items" :ui="{item: 'p-2'}"/>
                </UFormField>
                
                <UFormField
                    name="message"
                    label="Besked"
                    required>
                    <UTextarea placeholder="Skriv din besked her..." class="w-full" size="xl" v-model="formData.message"/>
                </UFormField>

                <UButton
                    variant="solid"
                    color="primary"
                    size="xl"
                    class="flex w-full justify-center mt-10"
                    trailing-icon="i-lucide-send"
                    type="submit"
                >
                    Send besked
                </UButton>
            </UForm>
        </template>
    </USlideover>
</template>