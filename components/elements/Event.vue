<script setup>
  const props = defineProps({
    event: Object,
  })
  const val_date = new Date(props.event.date)
  const date = val_date.getDate() + '.' + (val_date.getMonth() + 1)
  var today = new Date()
  var isToday = today.setHours(0, 0, 0, 0) == val_date.setHours(0, 0, 0, 0)
</script>

<template>
  <div class="event">
    <div class="date -type-xl">
      <span v-if="isToday">Today! </span>{{ date }}
    </div>
    <div v-if="event.place" class="place times -type-m">
      {{ event.place }}
    </div>
    <div v-if="event.desc" class="content">
      <div class="before">
        <div class="hour times -type-l">{{ event.hour }}</div>
        <div v-if="event.title" class="title times -type-l">
          {{ event.title }}
        </div>
      </div>
      <div class="after">
        <div class="desc times -type-m">
          {{ event.desc }}
        </div>
      </div>
    </div>
    <div v-else class="content">
      <div class="info">
        <div class="hour times -type-l">{{ event.hour }}</div>
        <div v-if="event.title" class="title times -type-l">
          {{ event.title }}
        </div>
      </div>
    </div>
    <div class="link">
      <a v-if="event.link" :href="event.link" class="times -type-m">
        See more...
      </a>
    </div>
    <div class="tickets">
      <a
        v-if="event.ticketslink"
        :href="event.ticketslink"
        class="times -type-m"
      >
        Tickets:
        <span v-if="event.price" class="times -type-m"
          >{{ event.price }}PLN</span
        >
      </a>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .desc {
    white-space: pre-wrap;
  }
  .event {
    position: relative;
    padding: var(--space-m);
    border: 1px dashed black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;

    & > * {
      transition: opacity 0.3s ease;
    }

    & > .date {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    & > .place {
      grid-column: 2/3;
      grid-row: 1/2;
      text-align: right;
    }

    & > .tickets {
      opacity: 0;
      grid-column: 2/3;
      grid-row: 3/4;
      text-align: right;
      display: inline-block;
    }

    & > .link {
      opacity: 0;
      display: inline-block;
    }

    & > .content {
      grid-column: 1/3;
      grid-row: 2/3;
      display: grid;
      & > * {
        grid-area: 1/1;
        transition: opacity 0.3s ease;
        cursor: default;
        align-self: center;
      }

      & > .after {
        opacity: 0;
      }
      & > .before,
      .info {
        & > .hour {
          text-decoration: underline;
        }
        & > .hour,
        .title {
          text-align: left;
        }
      }
    }

    &.first {
      height: calc((100vw - 20px) / 3);

      & > .content {
        & > .before,
        .info {
          & > .hour,
          .title {
            text-align: center;
          }
        }

        & > .after {
          & > .desc {
            text-align: center;
          }
        }
      }
    }

    @media screen and (max-width: 600px) {
      aspect-ratio: 1;
      &.first {
        height: auto;
      }
    }

    @media (hover: hover) {
      &:hover {
        & > .tickets {
          opacity: 1;
        }

        & > .link {
          opacity: 1;
        }
        & > .content {
          & > .before {
            opacity: 0;
          }

          & > .after {
            opacity: 1;
          }
        }
      }
    }

    & > .hour {
      text-decoration: 2px underline;
    }
  }
</style>
