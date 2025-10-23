import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export class Formatters {
  static date(date: string | Date, formatStr: string = 'dd/MM/yyyy'): string {
    try {
      const dateObj = typeof date === 'string' ? parseISO(date) : date;
      return format(dateObj, formatStr, { locale: es });
    } catch (error) {
      return '';
    }
  }

  static dateTime(date: string | Date): string {
    return this.date(date, 'dd/MM/yyyy HH:mm');
  }

  static time(date: string | Date): string {
    return this.date(date, 'HH:mm');
  }

  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static statusEvent(status: string): string {
    const statusMap: Record<string, string> = {
      NOT_INITIATED: 'No Iniciado',
      STARTED: 'Iniciado',
      IN_PROGRESS: 'En Progreso',
      FINISHED: 'Finalizado',
      CANCELED: 'Cancelado',
    };
    return statusMap[status] || status;
  }

  static frequency(freq: string): string {
    const freqMap: Record<string, string> = {
      DAILY: 'Diario',
      WEEKLY: 'Semanal',
      MONTHLY: 'Mensual',
      YEARLY: 'Anual',
    };
    return freqMap[freq] || freq;
  }
}
