import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-frequency-data',
  templateUrl: './frequency-data.component.html',
  styleUrls: ['./frequency-data.component.css']
})
export class FrequencyDataComponent implements OnInit {
  nome: string = '';
  frequencia: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nome = params['nome'];
      this.fetchFrequencyData(this.nome);
    });
  }

  fetchFrequencyData(nome: string): void {
    this.apiService.getFrequencyData(nome).subscribe(data => {
      this.frequencia = data;
    });
  }

  getTotalFrequencia(): string {
    let total = 0;
    if (this.frequencia[0]?.res) {
      for (const item of this.frequencia[0]?.res) {
        total += item.frequencia;
      }
    }
    return total.toLocaleString();
  }
}
