import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="pt-48 pb-24 text-center">
      <h1 className="text-4xl font-bold text-ink">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you are looking for does not exist.
      </p>
      <Button href="/" className="mx-auto mt-8">
        Back to Home
      </Button>
    </Container>
  );
}
