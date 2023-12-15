<script lang="ts" setup>
let projects = [
  {
    id: 0,
    label: "react",
    content: `<p>Simple react Single page application created with <strong>React</strong> and <strong>Bulma</strong> for styling.
                Utilizes reddit json API to browse posts and subreddits on any device. Tou can even download it, thanks to <storng>PWA</strong> integration.</p>`,
    title: "React Reddit Client",
    img: {
      desktop: "/react-desktop.webp",
      mobile: "/react-mobile.webp",
    },
    bgColor: "bg-sky-600",
    textColor: "text-sky-100",
    borderColor: "border-sky-600",
    href: "https://reddit.peterkudelas.eu",
    icon: "logos:react",
    tech: [
      { name: "react", href: "https://react.dev/" },
      { name: "redux", href: "https://redux.js.org/" },
      { name: "bulmaCSS", href: "https://bulma.io/" },
    ],
  },
  {
    id: 1,
    label: "vue",
    content:
      "Single page Full-stack Web Application for Azure DevOps. Handles user authentification, CRUD Operations and connection with <strong>Azure LogicApps</strong>. Created with <strong>Vue</strong>, <strong>Pinia</strong> for state management, <strong>TailwindCSS</strong> for styling and <strong>Firebase</strong> for backend.",
    title: "Check my ticket",
    img: {
      desktop: "/vue-desktop.webp",
      mobile: "/vue-mobile.webp",
    },
    bgColor: "bg-teal-600",
    textColor: "text-teal-100",
    borderColor: "border-teal-600",
    href: "https://henkel-adhesives.com/en/check-my-ticket.html",
    icon: "logos:vue",
    tech: [
      { name: "VueJS", href: "https://vuejs.org/" },
      { name: "Pinia", href: "https://pinia.vuejs.org/" },
      { name: "TailwindCSS", href: "https://tailwindcss.com/" },
      { name: "Firebase", href: "https://firebase.google.com/" },
    ],
  },
  {
    id: 2,
    label: "svelte",
    content:
      "Full Stack mulit tenant AI focused Web application Created with <strong>SvelteKit</strong>, <strong>TailwindCSS</strong> and <strong>Firebase</strong>. Handles User authentication to correct organization, dedicated APIs for AI. Application has been developed for Henkel.",
    img: {
      desktop: "/svelte-desktop.webp",
      mobile: "/react-mobile.webp",
    },
    title: "SEO Catcher",
    bgColor: "bg-amber-700",
    textColor: "text-amber-100",
    borderColor: "border-amber-700",
    icon: "logos:svelte-icon",
    tech: [
      { name: "SvelteKit", href: "https://kit.svelte.dev/" },
      { name: "TailwindCSS", href: "https://tailwindcss.com/" },
      { name: "Firebase", href: "https://firebase.google.com/" },
    ],
  },
];

let activeProject = useState("project", () => 0);
</script>

<template>
  <div
    class="flex flex-col gap-8 sm:gap-0 lg:grid lg:grid-cols-3 min-h-screen lg:content-center justify-items-center items-center sm:gap-y-20 max-sm:mt-20 "
  >
  <div class="col-span-3 flex w-full content-center items-center max-w-6xl gap-4 justify-center">
      <h2
        class="text-[2.5rem] sm:text-6xl font-code font-extrabold md:font-medium relative shrink-0 w-max"
      >
        <GradientText
          from="from-sky-500"
          to="to-accent"
          class="blur-2xl absolute left-0"
        >
          {{ "< Projects />" }}
        </GradientText>
        <GradientText from="from-info" to="to-info">
          {{ "< Projects />" }}
        </GradientText>
      </h2>
    <div class="h-0.5 bg-gradient-to-r from-info to-accent w-full max-lg:hidden"></div>
  </div>
    
    <ul class="flex flex-col gap-8 lg:col-start-1 sm:w-4/5 lg:max-xl:w-full">
      <li v-for="(project, index) in projects">
        <div
          class="collapse collapse-arrow shadow-md shadow-neutral"
          :class="[
            activeProject === project.id
              ? [project.bgColor, project.textColor]
              : 'bg-base-100',
          ]"
        >
          <input
            type="radio"
            name="my-accordion-2"
            :checked="project.id === activeProject"
            @click="activeProject = index"
          />
          <div
            class="collapse-title flex items-center gap-4 text-xl font-medium capitalize"
          >
            {{ project.label }}
            <Icon :name="project.icon" class="text-2xl" />
          </div>
          <div class="collapse-content flex w-full flex-col">
            <div
              class="prose [&_strong]:text-base-100 [&_strong]:underline underline-offset-2"
              :class="project.textColor"
              v-html="project.content"
            />
            <div class="divider divider-neutral my-0"></div>
            <div class="flex justify-center gap-4 font-bold flex-wrap">
              <a
                v-for="{ name, href } in project.tech"
                :href="href"
                class="link-hover link link-neutral text-lg capitalize hover:text-neutral-content"
                >{{ name }}</a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="flex h-full flex-col gap-8 lg:col-span-2 lg:col-start-2">
      <div
        class="mockup-browser hidden border border-info bg-base-300 shadow-lg shadow-neutral md:block"
      >
        <div class="mockup-browser-toolbar">
          <div class="input border border-base-100 text-xl font-bold">
            <span>
              {{ projects[activeProject].title }}
            </span>
          </div>
        </div>
        <div
          class="artboard artboard-horizontal w-[640px] h-[360px] xl:w-[736px] xl:h-[414px] overflow-hidden border-t border-info"
        >
          <Transition name="fade" mode="out-in">
            <NuxtImg
              :key="activeProject"
              :src="projects[activeProject].img.desktop"
              alt="project"
              loading="lazy"
              placeholder
              class="w-full max-sm:hidden"
              sizes="0px sm:640px xl:736px"
            />
          </Transition>
        </div>
      </div>
      <div
        class="mockup-phone md:hidden border-none dark:bg-neutral-content shadow-lg shadow-neutral"
      >
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo h-[600px] w-[300px] bg-neutral">
            <Transition name="fade" mode="out-in">
              <NuxtImg
                :key="activeProject"
                :src="projects[activeProject].img.mobile"
                alt="project"
                class="h-full sm:hidden"
                fit="contain"
                placeholder
                sizes="300px sm:0px"
              />
            </Transition>
          </div>
        </div>
      </div>
      <a :href="projects[activeProject].href" class="w-full self-end md:w-fit">
        <button
          class="btn btn-accent w-full"
          :disabled="!projects[activeProject].href"
        >
          {{
            projects[activeProject].href
              ? `Check live project`
              : "Sorry this project is not public"
          }}
        </button></a
      >
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  @apply translate-x-1/2;
}

.fade-leave-to {
  @apply -translate-x-full;
}
</style>
