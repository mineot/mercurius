<template>
  <layout-admin>
    <app-flex-grid type="column">
      <app-flex-grid wrap>
        <wadm-menu icon="question-octagon-fill" text="Menu 1" />
        <wadm-menu icon="question-octagon-fill" text="Menu 2" />
        <wadm-menu icon="question-octagon-fill" text="Menu 3" />
        <wadm-menu icon="question-octagon-fill" text="Menu 4" />
      </app-flex-grid>

      <app-flex-grid type="column">
        <app-btn label="term.back_to_home" type="link" to="/" />
      </app-flex-grid>
    </app-flex-grid>
  </layout-admin>
</template>
