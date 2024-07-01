<template>
  <wath-card title="term.code_validator">
    <app-number id="code" label="term.code" />
    <template #footer>
      <app-flex-grid type="column">
        <app-btn label="term.validate" type="primary"></app-btn>
        <app-btn label="term.back_to_home" type="link" to="/"></app-btn>
      </app-flex-grid>
    </template>
  </wath-card>
</template>
