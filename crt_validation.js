
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let errors = [];

        // Year validation
        const yearInput = form.querySelector('input[name="year_disposed"]');
        const year = parseInt(yearInput.value, 10);
        const currentYear = new Date().getFullYear();
        if (isNaN(year) || year < 1900 || year > currentYear) {
            errors.push("Please enter a valid year (1900 to " + currentYear + ").");
        }

        // Disposal method validation
        const disposalInput = form.querySelector('select[name="disposal_method"]');
        if (!disposalInput.value) {
            errors.push("Please select a disposal method.");
        }

        // Reason validation
        const reasonInput = form.querySelector('select[name="reason"]');
        if (!reasonInput.value) {
            errors.push("Please select a reason for stopping CRT usage.");
        }

        // Display errors and prevent submission if any exist
        if (errors.length > 0) {
            event.preventDefault();
            alert("Please fix the following errors:\n" + errors.join("\n"));
        }
    });
});
